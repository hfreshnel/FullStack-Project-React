// api.js
import axios from 'axios';

const API_BASE_URL = 'http://10.3.70.13/:8080';

// Récupérer une question par ID
export const fetchQuestion = async questionId => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/public/questions/${questionId}`,
    );
    return response.data; // Données JSON de la question
  } catch (error) {
    console.error('Erreur lors de la récupération de la question :', error);
    return null;
  }
};

// Récupérer les IDs de questions pour un quiz
export const fetchQuestionIds = async id => {
  try {
    const response = await axios.get(`${API_BASE_URL}/admin/${id}/questionIds`);
    return response.data; // Liste des IDs de questions
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des IDs de questions :',
      error,
    );
    return null;
  }
};

// Récupérer les statistiques
export const fetchStatistique = async (quiz_id, question_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/public/quiz/${quiz_id}/questions/${question_id}/`,
    );
    return response.data; // Données des statistiques
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques :', error);
    return null;
  }
};

export const fetchClassement = async quiz_id => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/public/quiz/${quiz_id}/classement`,
    );
    return response.data; // Données des statistiques
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques :', error);
    return null;
  }
};
