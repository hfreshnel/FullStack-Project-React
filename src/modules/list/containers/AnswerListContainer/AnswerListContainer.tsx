import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Size } from '../../../../common/enums/Size.ts';
import './AnswerListContainer.css';

interface Proposition {
  id: number;
  correct: number;
  libelle: string;
}

interface Question {
  id: number;
  libelle: string;
  propositions: Proposition[];
}
const isAdmin = (localStorage.getItem("role") === "1");


const AnswerListContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestionData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://10.3.70.13:8080/public/questions/${id}`, {
          method: 'GET',
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }

        const data = await response.json();
        if (data?.data) {
          setQuestion({
            id: data.data.id,
            libelle: data.data.libelle,
            propositions: data.data.propositions,
          });
        } else {
          setError('Question non trouvée.');
        }
      } catch (err) {
        console.error('Erreur :', err);
        setError('Une erreur est survenue lors du chargement de la question.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestionData();
  }, [id]);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!question) return <p>Aucune question disponible.</p>;

  return (
  <>
    <MainMenu />
    <div className="answer-list-container">
      <div className="content">
        <div className="titre-nom">{question.libelle}</div>
        <div className="question-list-container-content">
          {question.propositions.map((proposition) => (
            <MainCard
              key={proposition.id}
              label={proposition.libelle}
              bgColor={proposition.correct ? Color.GREEN : Color.GREY}
              textColor={Color.WHITE}
              className="choix"
            />
          ))}
        </div>
        { isAdmin && (
          <TextButton
            label="Sauvegarder la question"
            borderColor={Color.BLUE}
            bgColor={Color.WHITE}
            textColor={Color.BLUE}
            btnSize={Size.LARGE}
            className="button-sauvegarder"
            />
        )
          
        }
            
      </div>
    </div>
  </>
  );
};

export default AnswerListContainer;
