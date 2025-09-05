'use client';

import { useState, useEffect } from 'react';
import { MapPin, Users, Shield, TrendingUp } from 'lucide-react';
import { InfoCard } from './InfoCard';
import { CTAButton } from './CTAButton';
import { StateSelector } from './StateSelector';

interface DashboardProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

export function Dashboard({ selectedState, onStateChange }: DashboardProps) {
  const [stats, setStats] = useState({
    guidesAccessed: 81,
    legalCases: 73,
    usersHelped: 1200
  });

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 text-shadow">
          RightsGuard AI
        </h1>
        <p className="text-white text-opacity-80 text-lg">
          Know your rights, instantly & securely
        </p>
        <div className="mt-4 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-white text-sm">Novice Mode</span>
        </div>
      </div>

      {/* State Selection */}
      <div className="max-w-md mx-auto">
        <StateSelector 
          selectedState={selectedState}
          onStateChange={onStateChange}
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="metric-card text-center">
          <div className="text-2xl font-bold text-white mb-1">{stats.guidesAccessed}</div>
          <div className="text-white text-opacity-70 text-sm">Guides Accessed</div>
        </div>
        <div className="metric-card text-center">
          <div className="text-2xl font-bold text-white mb-1">{stats.legalCases}</div>
          <div className="text-white text-opacity-70 text-sm">Legal Cases</div>
        </div>
        <div className="metric-card text-center col-span-2 lg:col-span-1">
          <div className="text-2xl font-bold text-white mb-1">{stats.usersHelped}</div>
          <div className="text-white text-opacity-70 text-sm">Users Helped</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          variant="guide"
          title="State-Specific Rights Guide"
          content={`Get instant access to your rights in ${selectedState || 'your state'}. Learn what to say, what not to say, and how to protect yourself during encounters.`}
        >
          <CTAButton variant="primary">
            View Rights Guide
          </CTAButton>
        </InfoCard>

        <InfoCard
          variant="script"
          title="Interactive Rights Tool"
          content="Practice real-world scenarios with AI-generated scripts. Get personalized guidance for traffic stops, questioning, and more."
        >
          <CTAButton variant="secondary">
            Start Interactive Tool
          </CTAButton>
        </InfoCard>
      </div>

      {/* Emergency Features */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Emergency Protection
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-5">
            <div className="w-10 h-10 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-medium">One-Tap Recording</p>
              <p className="text-white text-opacity-70 text-sm">Secure evidence capture</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-5">
            <div className="w-10 h-10 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-white font-medium">Emergency Alerts</p>
              <p className="text-white text-opacity-70 text-sm">Notify trusted contacts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Prompt */}
      <div className="glass-card p-6 text-center border border-accent border-opacity-30">
        <h3 className="text-lg font-semibold text-white mb-2">Upgrade to Pro</h3>
        <p className="text-white text-opacity-80 mb-4">
          Unlock unlimited guides, recording features, and emergency alerts for just $4.99/month
        </p>
        <CTAButton variant="primary" className="mx-auto">
          Upgrade Now
        </CTAButton>
      </div>
    </div>
  );
}
