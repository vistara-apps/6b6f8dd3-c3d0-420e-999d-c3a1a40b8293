'use client';

import { useState } from 'react';
import { 
  Shield, 
  BookOpen, 
  MessageSquare, 
  Video, 
  AlertTriangle, 
  Settings2, 
  X,
  CheckCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Shield },
  { id: 'guides', label: 'Rights Guides', icon: BookOpen },
  { id: 'interactive', label: 'Interactive Tool', icon: MessageSquare },
  { id: 'recording', label: 'Recording', icon: Video },
  { id: 'alerts', label: 'Emergency Alerts', icon: AlertTriangle },
  { id: 'settings', label: 'Settings', icon: Settings2 },
];

export function Sidebar({ isOpen, onClose, activeSection, onSectionChange }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-black bg-opacity-30 backdrop-blur-lg border-r border-white border-opacity-20 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white border-opacity-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">RightsGuard AI</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSectionChange(item.id);
                        onClose();
                      }}
                      className={`sidebar-item w-full ${isActive ? 'active' : ''}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {isActive && <CheckCircle className="w-4 h-4 ml-auto" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white border-opacity-20">
            <div className="glass-card p-3 text-center">
              <p className="text-white text-sm font-medium mb-1">Free Tier</p>
              <p className="text-white text-opacity-70 text-xs mb-2">
                3 guides remaining this month
              </p>
              <button className="btn-primary w-full text-xs py-2">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
