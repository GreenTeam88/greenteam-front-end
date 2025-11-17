import { Colors } from './_components/colors';
import { SubmissionForm } from './_components/form';
import { Hero } from './_components/hero';
import { TextSection } from './_components/textSection';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TextSection />
      <Colors />
      <SubmissionForm />
    </div>
  );
}
