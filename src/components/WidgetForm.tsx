import { CloseButton } from "./CloseButton";
import { useState } from "react";

import bugUrlImage from '../assets/bug.svg'
import ideaUrlImage from '../assets/idea.svg'
import thoughtUrlImage from '../assets/thought.svg'

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
        <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>

            <CloseButton />
        </header>

        {!feedbackType ? (
            <div className="flex py-8 gap-2 w-full">
            { Object.entries(feedbackTypes).map(([key, value]) => { 
                return (
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent  hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        onClick={ () => setFeedbackType(key as FeedbackType)}
                        
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                )
            }) }
        </div>
        ) : (
            <span>Seu feedback foi este: {feedbackType}</span>
        )}

        <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
        </footer>
    </div>
    )
}