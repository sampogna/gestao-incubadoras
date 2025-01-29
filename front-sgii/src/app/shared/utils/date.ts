//Converte uma data em pt-BR para um objeto Date do typescript
export function convertDateStringToDateObject(dateString: string): Date {
    // Quebrar a string para montar o formato correto
    const day = dateString.slice(0, 2);    // 25
    const month = dateString.slice(2, 4);  // 01
    const year = dateString.slice(4, 8);   // 2025
    const hours = dateString.slice(8, 10); // 13
    const minutes = dateString.slice(10, 12); // 24

    const formattedString = `${day}/${month}/${year} ${hours}:${minutes}`;
    console.log(formattedString); 
    
    // Transformando em um objeto Date
    const isoString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    return new Date(isoString);
}

export function convertDateObjectToDateString(dateObject: Date): string {
    // Obter os componentes da data
    const day = dateObject.getDate().toString().padStart(2, '0'); // Adicionar zero à esquerda, se necessário
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Meses são baseados em zero
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    
    // Montar a string no formato "DD/MM/YYYY HH:mm"
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}