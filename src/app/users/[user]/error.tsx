'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Sorry! This user does not exist</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
