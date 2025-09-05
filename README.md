# RightsGuard AI - Base Mini App

A mobile-first AI-powered tool empowering individuals with instant, state-specific legal information and emergency protection features during encounters.

## Features

### 🛡️ Core Features
- **State-Specific Rights Guides**: AI-generated, localized legal information
- **Interactive Rights Tool**: Scenario-based guidance with AI scripts
- **One-Tap Incident Recording**: Secure IPFS storage with location/time stamps
- **Emergency Contact Alerts**: Instant, discreet notifications to trusted contacts
- **Shareable AI Content**: Auto-generated summary cards for social sharing

### 🔧 Technical Features
- Built with Next.js 15 and App Router
- OnchainKit integration for Base blockchain
- MiniKit provider for seamless wallet connection
- AI-powered content generation via OpenAI/OpenRouter
- Mobile-first responsive design
- TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- API keys for required services

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rightsguard-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your API keys to `.env.local`:
- OpenAI or OpenRouter API key for AI content generation
- OnchainKit API key for Base integration
- Pinata API keys for IPFS storage (optional)
- Stripe API keys for payments (optional)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

### Data Models
- **User**: Authentication and subscription management
- **LocationData**: GPS tracking for legal context
- **EncounterRecord**: Secure recording storage
- **AlertLog**: Emergency notification history
- **RightsGuide**: State-specific legal content

### API Integration
- **OpenAI/OpenRouter**: AI content generation
- **Pinata**: IPFS storage for recordings
- **Base RPC**: Blockchain interactions
- **Stripe**: Payment processing
- **Privy**: Authentication and wallet management

### Design System
- Purple gradient theme matching legal/security branding
- Glass morphism UI components
- Mobile-first responsive design
- Tailwind CSS with custom design tokens

## Usage

### Free Tier
- Limited access to rights guides (3/month)
- Basic interactive scenarios (2/month)
- 5 minutes of recording storage

### Pro Subscription ($4.99/month)
- Unlimited rights guides and scenarios
- Full recording capabilities with IPFS storage
- Emergency alert system
- Priority AI content generation
- On-chain payment via Base

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Security & Privacy

- All recordings are encrypted before IPFS storage
- Location data is only stored with user consent
- Emergency contacts are encrypted locally
- No personal data is shared without explicit permission
- Compliant with privacy regulations

## Legal Disclaimer

RightsGuard AI provides general legal information and should not be considered legal advice. Always consult with a qualified attorney for specific legal situations. The app is designed to help users understand their rights but cannot guarantee legal outcomes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@rightsguard.ai or create an issue in this repository.

## Roadmap

- [ ] Multi-language support expansion
- [ ] Integration with legal aid organizations
- [ ] Advanced AI scenario training
- [ ] Community-driven content updates
- [ ] Integration with body cameras
- [ ] Real-time legal consultation features
