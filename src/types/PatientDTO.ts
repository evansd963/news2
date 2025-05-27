export interface PatientDTO {
  id: string;
  name: string;
  age: number;
  respiratoryRate: number;
  oxygenSaturation: number;
  temperature: number;
  systolicBP: number;
  heartRate: number;
  consciousness: 'Alert' | 'Voice' | 'Pain' | 'Unresponsive';
  supplementalO2: boolean;
} 