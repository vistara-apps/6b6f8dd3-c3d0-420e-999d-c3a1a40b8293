export interface User {
  userId: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  subscriptionStatus: 'free' | 'pro';
  subscriptionExpiry?: Date;
}

export interface LocationData {
  locationId: string;
  userId: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
  ipAddress: string;
}

export interface EncounterRecord {
  recordId: string;
  userId: string;
  timestamp: Date;
  geoLocation: {
    latitude: number;
    longitude: number;
  };
  audioFilePath?: string; // IPFS CID
  videoFilePath?: string; // IPFS CID
  notes?: string;
  status: 'recording' | 'completed' | 'uploaded';
}

export interface AlertLog {
  alertId: string;
  userId: string;
  timestamp: Date;
  geoLocation: {
    latitude: number;
    longitude: number;
  };
  recipientContact: string;
  message: string;
}

export interface RightsGuide {
  guideId: string;
  state: string;
  title: string;
  content: string;
  language: 'en' | 'es';
  createdAt: Date;
  updatedAt: Date;
}

export interface AIScriptRequest {
  scenario: string;
  state: string;
  language: 'en' | 'es';
}

export interface AIScriptResponse {
  script: string;
  keyPoints: string[];
  warnings: string[];
}

export type SubscriptionTier = 'free' | 'pro';

export interface AppState {
  user: User | null;
  currentLocation: LocationData | null;
  subscriptionTier: SubscriptionTier;
  isRecording: boolean;
  selectedState: string;
  language: 'en' | 'es';
}
