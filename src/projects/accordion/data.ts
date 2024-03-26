export type AccordionData = {
  id?: number;
  question: string;
  answer: string;
};

export const accordionData: AccordionData[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "The capital of France is Paris.",
  },
  {
    id: 2,
    question: "Which chemical element has the symbol 'H'?",
    answer: "The symbol 'H' represents the element hydrogen.",
  },
  {
    id: 3,
    question: "Which continent is the largest?",
    answer: "The largest continent is Asia.",
  },
];
