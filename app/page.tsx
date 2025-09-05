'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppHeader } from '@/components/AppHeader';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { RecordButton } from '@/components/RecordButton';
import { AlertButton } from '@/components/AlertButton';
import { LanguageToggle } from '@/components/LanguageToggle';
import { StateSelector } from '@/components/StateSelector';
import { generateRightsScript, generateRightsGuide } from '@/lib/ai-service';
import { COMMON_SCENARIOS } from '@/lib/constants';
import { BookOpen, MessageSquare, Video, AlertTriangle, Settings2 } from 'lucide-react';

export default function Home() {
  const { setFrameReady } = useMiniKit();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedState, setSelectedState] = useState('California');
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiContent, setAiContent] = useState<any>(null);

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const handleGenerateScript = async (scenario: string) => {
    setLoading(true);
    try {
      const script = await generateRightsScript({
        scenario,
        state: selectedState,
        language
      });
      setAiContent(script);
    } catch (error) {
      console.error('Error generating script:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateGuide = async () => {
    setLoading(true);
    try {
      const guide = await generateRightsGuide(selectedState, language);
      setAiContent({ guide });
    } catch (error) {
      console.error('Error generating guide:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    // In a real app, this would start actual recording
    console.log('Starting recording...');
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // In a real app, this would stop recording and upload to IPFS
    console.log('Stopping recording...');
  };

  const handleTriggerAlert = () => {
    // In a real app, this would send emergency alerts
    console.log('Triggering emergency alert...');
    alert('Emergency alert sent to your contacts!');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <Dashboard 
            selectedState={selectedState}
            onStateChange={setSelectedState}
          />
        );

      case 'guides':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Rights Guides
              </h2>
              <LanguageToggle 
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>

            <StateSelector 
              selectedState={selectedState}
              onStateChange={setSelectedState}
            />

            <InfoCard
              variant="guide"
              title={`${selectedState} Rights Guide`}
              content={aiContent?.guide || `Comprehensive legal rights information for ${selectedState}. Click below to generate your personalized guide.`}
            >
              <CTAButton 
                variant="primary" 
                loading={loading}
                onClick={handleGenerateGuide}
              >
                Generate Guide
              </CTAButton>
            </InfoCard>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Interactive Tool
              </h2>
              <LanguageToggle 
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMON_SCENARIOS.map((scenario) => (
                <div key={scenario} className="glass-card p-4">
                  <h3 className="text-white font-medium mb-2">{scenario}</h3>
                  <p className="text-white text-opacity-70 text-sm mb-3">
                    Get AI-generated scripts for this scenario
                  </p>
                  <CTAButton 
                    variant="secondary"
                    loading={loading}
                    onClick={() => handleGenerateScript(scenario)}
                  >
                    Generate Script
                  </CTAButton>
                </div>
              ))}
            </div>

            {aiContent?.script && (
              <InfoCard
                variant="script"
                title="Generated Script"
                content={aiContent.script}
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-2">Key Points:</h4>
                    <ul className="text-white text-opacity-80 text-sm space-y-1">
                      {aiContent.keyPoints?.map((point: string, index: number) => (
                        <li key={index}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Warnings:</h4>
                    <ul className="text-red-300 text-sm space-y-1">
                      {aiContent.warnings?.map((warning: string, index: number) => (
                        <li key={index}>⚠️ {warning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </InfoCard>
            )}
          </div>
        );

      case 'recording':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Video className="w-6 h-6" />
              Incident Recording
            </h2>

            <div className="text-center py-12">
              <RecordButton
                variant={isRecording ? 'active' : 'inactive'}
                isRecording={isRecording}
                onStartRecording={handleStartRecording}
                onStopRecording={handleStopRecording}
              />
            </div>

            <InfoCard
              variant="alert"
              title="Recording Guidelines"
              content="Your recordings are automatically encrypted and stored securely on IPFS. Location and timestamp are included for legal documentation."
            >
              <div className="text-white text-opacity-80 text-sm space-y-2">
                <p>• Keep your phone steady and visible</p>
                <p>• Announce that you are recording (if legally required)</p>
                <p>• Stay calm and follow your rights script</p>
                <p>• Recordings are automatically backed up</p>
              </div>
            </InfoCard>
          </div>
        );

      case 'alerts':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Emergency Alerts
            </h2>

            <div className="text-center py-12">
              <AlertButton onTriggerAlert={handleTriggerAlert} />
            </div>

            <InfoCard
              variant="alert"
              title="Emergency Contact System"
              content="Instantly notify up to 5 trusted contacts with your location and situation. Messages are sent discreetly via SMS and app notifications."
            >
              <CTAButton variant="secondary">
                Manage Contacts
              </CTAButton>
            </InfoCard>

            <div className="glass-card p-4">
              <h3 className="text-white font-medium mb-3">Quick Alert Messages</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors duration-200">
                  <p className="text-white text-sm">"I'm being stopped by police at [location]"</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors duration-200">
                  <p className="text-white text-sm">"Need legal assistance - check my location"</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors duration-200">
                  <p className="text-white text-sm">"Emergency situation - please call me"</p>
                </button>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Settings2 className="w-6 h-6" />
              Settings
            </h2>

            <div className="space-y-4">
              <div className="glass-card p-4">
                <h3 className="text-white font-medium mb-3">Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-opacity-80">Default Language</span>
                    <LanguageToggle 
                      currentLanguage={language}
                      onLanguageChange={setLanguage}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-opacity-80">Auto-detect Location</span>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4">
                <h3 className="text-white font-medium mb-3">Subscription</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-opacity-80">Current Plan</span>
                  <span className="text-white">Free Tier</span>
                </div>
                <CTAButton variant="primary">
                  Upgrade to Pro - $4.99/month
                </CTAButton>
              </div>

              <div className="glass-card p-4">
                <h3 className="text-white font-medium mb-3">Emergency Contacts</h3>
                <p className="text-white text-opacity-70 text-sm mb-3">
                  Add up to 5 trusted contacts for emergency alerts
                </p>
                <CTAButton variant="secondary">
                  Manage Contacts
                </CTAButton>
              </div>
            </div>
          </div>
        );

      default:
        return <Dashboard selectedState={selectedState} onStateChange={setSelectedState} />;
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="flex-1 flex flex-col lg:ml-0">
        <AppHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 p-4 lg:p-6 max-w-6xl mx-auto w-full">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
