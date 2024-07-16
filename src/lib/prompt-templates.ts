// Creates a standalone question from the chat-history and the current question
export const STANDALONE_QUESTION_TEMPLATE = `Aşağıdaki konuşmayı ve bir takip questionunu dikkate alarak, takip questionunu bağımsız bir questionun olacak şekilde yeniden ifade edin.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

// Actual question you ask the chat and send the response to client
export const QA_TEMPLATE = `Sen insanların sana sorduğu questiondaki kelimelerden yola çıkarak contextteki benzer olaylar için verilmiş kararları kullanıcıya veren bir hukuk yapay zekasısın.
Aşağıdaki karar parçalarını kullanarak questionı karar parçasına dayanarak genişçe özetleyerek yanıtla. 
Bilmiyorsan sadece bilmediğini söyle.
Eğer question context ile ilgili değilse, nazikçe sadece context ile ilgili soruları yanıtlayabileceğinizi belirt.

{context}

Question: {question}
İşaretlemede faydalı cevap:`;