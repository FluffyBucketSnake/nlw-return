import { FeedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <main className="flex py-8 gap-2 w-full">
        {Object.entries(FeedbackTypes).map(([key, { title, image }]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
          >
            <img src={image.src} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </main>
    </>
  );
}
