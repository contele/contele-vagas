/**
 * Funções auxiliares para formatação de datas
 */

/**
 * Formata uma data ISO para exibição amigável
 */
export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

/**
 * Retorna o tempo relativo (ex: "5 minutos atrás")
 */
export const getRelativeTime = (isoString: string): string => {
  const now = new Date();
  const date = new Date(isoString);
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);

  if (diffMinutes < 1) return 'Agora';
  if (diffMinutes < 60) return `${diffMinutes} minutos atrás`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} horas atrás`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} dias atrás`;
};
