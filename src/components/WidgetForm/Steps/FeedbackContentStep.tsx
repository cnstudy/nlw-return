import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreeshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestart, onFeedbackSent }: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log({screenshot, comment})

        onFeedbackSent();
    }

    return (
        <>
        <header>

        {/* Botão de voltar */}
         <button 
         type="button" 
         className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
         onClick={onFeedbackRestart} >
             <ArrowLeft weight="bold" className="w-4 h-4" />
         </button>

        {/* Imagem e nome do tipo de Feedback */}
         <span className="text-xl leading-6 flex items-center gap-2">
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
             {feedbackTypeInfo.title}
         </span>
                
            <CloseButton />
        </header>

        <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] border-2 focus:ring-1 focus:border-brand-500 focus:ring-brand-500 focus:outline-none
            text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none"
            placeholder="Dê-nos o seu Feedback" 
            onChange={event => setComment(event.target.value)}
            />

            <footer className="flex gap-2 mt-2">

                <ScreeshotButton 
                screenshot={screenshot}
                onScreenshotTook={setScreenshot}/>

                <button type="submit"
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 disabled:opacity-50 disabled:hover:bg-brand-500
                        flex justify-center items-center text-sm hover:bg-brand-300 transition-colors
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                    Enviar Feedback
                </button>

            </footer>

        </form>
        </>
    );
};