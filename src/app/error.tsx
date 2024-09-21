'use client';

export default function GlobalError({ error }: { error: { message: string } }) {
  return (
    <div>
      <h2>Something wen wrong</h2>
      <code> Error: An error occurred: {error.message} </code>
    </div>
  );
}
