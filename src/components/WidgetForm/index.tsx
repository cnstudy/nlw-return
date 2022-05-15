import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugUrlImage from '../../assets/bug.svg'
import ideaUrlImage from '../../assets/idea.svg'
import thoughtUrlImage from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugUrlImage,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Idéia',
        image: {
            source: ideaUrlImage,
            alt: 'Aimagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtUrlImage,
            alt: 'Imagem de um pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl 
        mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        { feedbackSent ? (
            <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback}/>
        ) : (
            <>
                {!feedbackType ? (//Usuário não escolheu o tipo de feedback

                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>

                ) : (//Usuário escolheu um tipo de feedback
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestart={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
                />
                )}
            </>
        )}

        <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
        </footer>
    </div>
    )
}