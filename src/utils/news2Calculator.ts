import type { Patient } from '../types/PatientDTO';

// NEWS2 scoring logic based on the official chart
export function getNEWS2Score(param: string, value: any, patient: Patient): number {
  switch (param) {
    case 'Respiration rate':
      if (value <= 8) return 3;
      if (value >= 9 && value <= 11) return 1;
      if (value >= 12 && value <= 20) return 0;
      if (value >= 21 && value <= 24) return 2;
      if (value >= 25) return 3;
      break;
    case 'SpO2 Scale 1':
      if (value <= 91) return 3;
      if (value >= 92 && value <= 93) return 2;
      if (value >= 94 && value <= 95) return 1;
      if (value >= 96) return 0;
      break;
    case 'SpO2 Scale 2':
      if (value <= 83) return 3;
      if (value >= 84 && value <= 85) return 2;
      if (value >= 86 && value <= 87) return 1;
      if (value >= 88 && value <= 92) return 0;
      // On air
      if (value >= 93 && patient.supplementalO2 === false) return 0;
      // On oxygen
      if (value >= 93 && value <= 94 && patient.supplementalO2 === true) return 1;
      if (value >= 95 && value <= 96 && patient.supplementalO2 === true) return 2;
      if (value >= 97 && patient.supplementalO2 === true) return 3;
      break;
    case 'Air or oxygen':
      return patient.supplementalO2 ? 2 : 0;
    case 'Systolic BP':
      if (value <= 90) return 3;
      if (value >= 91 && value <= 100) return 2;
      if (value >= 101 && value <= 110) return 1;
      if (value >= 111 && value <= 219) return 0;
      if (value >= 220) return 3;
      break;
    case 'Pulse':
      if (value <= 40) return 3;
      if (value >= 41 && value <= 50) return 1;
      if (value >= 51 && value <= 90) return 0;
      if (value >= 91 && value <= 110) return 1;
      if (value >= 111 && value <= 130) return 2;
      if (value >= 131) return 3;
      break;
    case 'Consciousness':
      if (value === 'Alert') return 0;
      if (['Voice', 'Pain', 'Unresponsive', 'CVPU'].includes(value)) return 3;
      break;
    case 'Temperature':
      if (value <= 35.0) return 3;
      if (value > 35.0 && value <= 36.0) return 2;
      if (value > 36.0 && value <= 38.0) return 0;
      if (value > 38.0 && value <= 39.0) return 1;
      if (value > 39.0) return 3;
      break;
    default:
      return 0;
  }
  return 0;
}

export function calculateNEWS2Total(patient: Patient): number {
  if (!patient) return 0;
  let total = 0;
  total += getNEWS2Score('Respiration rate', patient.respiratoryRate, patient);
  total += getNEWS2Score('SpO2 Scale 1', patient.oxygenSaturation, patient);
  total += getNEWS2Score('Air or oxygen', patient.supplementalO2, patient);
  total += getNEWS2Score('Systolic BP', patient.systolicBP, patient);
  total += getNEWS2Score('Pulse', patient.heartRate, patient);
  total += getNEWS2Score('Consciousness', patient.consciousness, patient);
  total += getNEWS2Score('Temperature', patient.temperature, patient);
  return total;
}

export function getNews2Risk(score: number) {
  if (score <= 4) return { label: 'Low risk', color: '#22c55e', bar: '#bbf7d0' };
  if (score <= 6) return { label: 'Medium risk', color: '#eab308', bar: '#fef08a' };
  if (score <= 8) return { label: 'High risk', color: '#f97316', bar: '#fdba74' };
  return { label: 'Critical risk', color: '#ef4444', bar: '#fecaca' };
} 