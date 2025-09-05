'use client';

import { Shield, Menu, Bell } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';

interface AppHeaderProps {
  variant?: 'default' | 'transparent';
  onMenuClick?: () => void;
}

export function AppHeader({ variant = 'default', onMenuClick }: AppHeaderProps) {
  const isTransparent = variant === 'transparent';

  return (
    <header className={`sticky top-0 z-50 ${isTransparent ? 'bg-transparent' : 'glass-card'} px-4 py-3`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white hidden sm:block">
              RightsGuard AI
            </h1>
          </div>
        </div>

        {/* Center - Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#guides" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">
            Guides
          </a>
          <a href="#tools" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">
            Tools
          </a>
          <a href="#emergency" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">
            Emergency
          </a>
        </nav>

        {/* Right side - Notifications and Wallet */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
            <Bell className="w-5 h-5 text-white" />
          </button>
          
          <Wallet>
            <ConnectWallet className="btn-secondary text-sm">
              <Name className="text-white" />
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
