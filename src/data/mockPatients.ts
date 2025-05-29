import type { Patient } from '../types/PatientDTO';

export const patients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 65,
    respiratoryRate: 18,
    oxygenSaturation: 95,
    temperature: 37.2,
    systolicBP: 120,
    heartRate: 85,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 72,
    respiratoryRate: 21, // 2
    oxygenSaturation: 93, // 2
    temperature: 38.0, // 1
    systolicBP: 110, // 1
    heartRate: 95, // 0
    consciousness: 'Voice', // 3
    supplementalO2: false, // 0
    // Total: 2+2+1+1+0+3+0 = 9

  },
  {
    id: '3',
    name: 'Alice Brown',
    age: 58,
    respiratoryRate: 21, // 1
    oxygenSaturation: 94, // 1
    temperature: 38.1, // 1
    systolicBP: 120, // 0
    heartRate: 85, // 0
    consciousness: 'Alert', // 0
    supplementalO2: false, // 0
    // Total: 1+1+1+0+0+0+0 = 3

  },
  {
    id: '4',
    name: 'Michael Green',
    age: 50,
    respiratoryRate: 21,
    oxygenSaturation: 92,
    temperature: 37.8,
    systolicBP: 100,
    heartRate: 91,
    consciousness: 'Alert',
    supplementalO2: false, // Robert >8

  },
  {
    id: '5',
    name: 'Emily White',
    age: 44,
    respiratoryRate: 12,
    oxygenSaturation: 99,
    temperature: 37.0,
    systolicBP: 115,
    heartRate: 65,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '6',
    name: 'Robert Black',
    age: 80,
    respiratoryRate: 25, // 3
    oxygenSaturation: 97, // 0
    temperature: 37.0, // 0
    systolicBP: 120, // 0
    heartRate: 80, // 0
    consciousness: 'Alert', // 0
    supplementalO2: false, // 0
    // Total: 3+0+0+0+0+0+0 = 3

  },
  {
    id: '7',
    name: 'Linda Brown',
    age: 61,
    respiratoryRate: 10,
    oxygenSaturation: 92,
    temperature: 36.2,
    systolicBP: 100,
    heartRate: 55,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '8',
    name: 'David Lee',
    age: 55,
    respiratoryRate: 14,
    oxygenSaturation: 96,
    temperature: 37.5,
    systolicBP: 125,
    heartRate: 80,
    consciousness: 'Alert',
    supplementalO2: true,
  },
  {
    id: '9',
    name: 'Susan Clark',
    age: 68,
    respiratoryRate: 21, // 1
    oxygenSaturation: 94, // 1
    temperature: 36.9, // 0
    systolicBP: 120, // 0
    heartRate: 80, // 0
    consciousness: 'Alert', // 0
    supplementalO2: false, // 0
    // Total: 1+1+0+0+0+0+0 = 2

  },
  {
    id: '10',
    name: 'James King',
    age: 47,
    respiratoryRate: 19,
    oxygenSaturation: 97,
    temperature: 36.9,
    systolicBP: 135,
    heartRate: 72,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '11',
    name: 'Patricia Scott',
    age: 76,
    respiratoryRate: 16,
    oxygenSaturation: 97,
    temperature: 36.4,
    systolicBP: 120,
    heartRate: 75,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '12',
    name: 'Christopher Young',
    age: 34,
    respiratoryRate: 13,
    oxygenSaturation: 98,
    temperature: 36.4,
    systolicBP: 120,
    heartRate: 60,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '13',
    name: 'Jessica Hall',
    age: 59,
    respiratoryRate: 17,
    oxygenSaturation: 94,
    temperature: 37.8,
    systolicBP: 112,
    heartRate: 88,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '14',
    name: 'Matthew Allen',
    age: 63,
    respiratoryRate: 17,
    oxygenSaturation: 97,
    temperature: 36.7,
    systolicBP: 120,
    heartRate: 80,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '15',
    name: 'Sarah Wright',
    age: 41,
    respiratoryRate: 15,
    oxygenSaturation: 97,
    temperature: 36.7,
    systolicBP: 118,
    heartRate: 78,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '16',
    name: 'Daniel Harris',
    age: 70,
    respiratoryRate: 16,
    oxygenSaturation: 97,
    temperature: 36.8,
    systolicBP: 122,
    heartRate: 76,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '17',
    name: 'Karen Martin',
    age: 53,
    respiratoryRate: 21,
    oxygenSaturation: 93,
    temperature: 38.0,
    systolicBP: 110,
    heartRate: 95,
    consciousness: 'Voice',
    supplementalO2: false, // Jane >8

  },
  {
    id: '18',
    name: 'Paul Walker',
    age: 66,
    respiratoryRate: 16,
    oxygenSaturation: 98,
    temperature: 37.0,
    systolicBP: 120,
    heartRate: 80,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '19',
    name: 'Nancy Lewis',
    age: 60,
    respiratoryRate: 12,
    oxygenSaturation: 99,
    temperature: 36.3,
    systolicBP: 128,
    heartRate: 70,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '20',
    name: 'Steven Robinson',
    age: 49,
    respiratoryRate: 16,
    oxygenSaturation: 95,
    temperature: 37.1,
    systolicBP: 115,
    heartRate: 82,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '21',
    name: 'Maria Garcia',
    age: 58,
    respiratoryRate: 23,
    oxygenSaturation: 92,
    temperature: 38.5,
    systolicBP: 95,
    heartRate: 88,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '22',
    name: 'Thomas Wilson',
    age: 67,
    respiratoryRate: 21,
    oxygenSaturation: 94,
    temperature: 36.5,
    systolicBP: 98,
    heartRate: 125,
    consciousness: 'Alert',
    supplementalO2: true,
  },
  {
    id: '23',
    name: 'Rachel Chen',
    age: 45,
    respiratoryRate: 11,
    oxygenSaturation: 93,
    temperature: 35.9,
    systolicBP: 105,
    heartRate: 112,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '24',
    name: 'Andrew Foster',
    age: 52,
    respiratoryRate: 18,
    oxygenSaturation: 97,
    temperature: 36.8,
    systolicBP: 120,
    heartRate: 80,
    consciousness: 'Alert',
    supplementalO2: false,
  },
  {
    id: '25',
    name: 'Diana Martinez',
    age: 63,
    respiratoryRate: 16,
    oxygenSaturation: 98,
    temperature: 37.0,
    systolicBP: 122,
    heartRate: 76,
    consciousness: 'Alert',
    supplementalO2: false,
  },
];

export async function fetchAllPatients(): Promise<Patient[]> {
  return patients;
}

export async function fetchPatientById(id: string): Promise<Patient | null> {
  return patients.find((p) => p.id === id) || null;
} 