import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Calculator - GreenTeam',
  description: 'Bereken direct de prijs voor onze diensten',
};

// Redirect to the unified calculator
export default function CalculatorsPage() {
  redirect('/calculator/greenteam');
}
