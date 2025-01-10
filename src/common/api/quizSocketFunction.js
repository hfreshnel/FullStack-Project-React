import { fetchQuestion, fetchStatistique, fetchClassement } from './fetching';

export const joinQuiz = (socket, setQuizId, id) => {
  setQuizId(id);
  socket.emit('joinQuiz',{ quizId: id });
};

export const commencerQuiz = async (socket, quizId, questionIds, setCurrentQuestion, setCurrentQuestionId) => {
  if (!questionIds || questionIds.length === 0) {
    console.error('Liste des IDs de questions vide ou non chargée.');
    return;
  }
  const idQuestion = questionIds[0];
  const firstQuestion = await fetchQuestion(idQuestion);

  if (firstQuestion) {
    setCurrentQuestionId(0);
    setCurrentQuestion(firstQuestion.data);
    socket.emit('startQuiz', { quizId, firstQuestion: firstQuestion.data });
  } else {
    console.error('La première question est introuvable.');
  }
};

export const afficherQuestionSuivante = async (socket, quizId, currentQuestionId, questionIds, setCurrentQuestion, setCurrentQuestionId, setShowCorrectAnswer) => {
  if (!questionIds || questionIds.length === 0) {
    console.log('La liste des IDs de questions est vide ou non chargée.');
    return;
  }
  if (currentQuestionId >= questionIds.length) {
    console.log('Plus de questions disponibles.');
    return;
  }

  const nextId = questionIds[currentQuestionId];

  const response = await fetchQuestion(nextId);

  if (response) {
    setCurrentQuestion(response.data);
    setShowCorrectAnswer(false);
    setCurrentQuestionId(prevId => prevId + 1);
    socket.emit('nextQuestion', { quizId, nextQuestion: response.data });
  } else {
    console.error('Impossible de charger la question suivante.');
  }
};

export const afficherStatistique = async (socket, quizId, setStatistique,question_id, setMessage) => {
  const stats = await fetchStatistique(quizId,question_id);
  if (stats) {
    setStatistique(stats.data);
    setMessage(JSON.stringify(stats.data));
    socket.emit('showStatistique', { quizId, statistiques: stats.data });
  } else {
    console.error('Aucune statistique disponible.');
  }
};

export const afficherClassement = async (socket, quizId, setClassement, setMessage) => {
  const classement = await fetchClassement(quizId);
  if (classement.data) {
    setClassement(classement.data);
    setMessage(JSON.stringify(classement.data));
    socket.emit('showClassement', { quizId, classement: classement.data });
  } else {
    console.error('Aucune statistique disponible.');
  }
};

export const afficherReponse = (socket, quizId, setShowCorrectAnswer) => {
  setShowCorrectAnswer(true);
  socket.emit('showAnswer', { quizId });
};

export const endQuiz = (socket, quizId, setQuizEnded, setShowStatistique) => {
  socket.emit('endQuiz', quizId);
  setShowStatistique(false);
  setQuizEnded(true);
};

