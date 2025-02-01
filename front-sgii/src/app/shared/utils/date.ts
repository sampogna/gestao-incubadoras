//Converte uma data em pt-BR para um objeto Date do typescript
export function convertDateStringToDateObject(dateString: string): Date | null {
    if (!dateString) return null;

    // Remover espaços extras
    dateString = dateString.trim();

    // Formato: "DD/MM/YYYY HH:mm"
    const regexFormat1 = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;
    // Formato: "DDMMYYYYHHmm"
    const regexFormat2 = /^\d{12}$/;

    if (regexFormat1.test(dateString)) {
        const [datePart, timePart] = dateString.split(" ");
        const [day, month, year] = datePart.split("/").map(Number);
        const [hours, minutes] = timePart.split(":").map(Number);
        
        return new Date(year, month - 1, day, hours, minutes);
    }

    if (regexFormat2.test(dateString)) {
        // Formato "111220251010"
        const day = parseInt(dateString.slice(0, 2), 10);
        const month = parseInt(dateString.slice(2, 4), 10) - 1;
        const year = parseInt(dateString.slice(4, 8), 10);
        const hours = parseInt(dateString.slice(8, 10), 10);
        const minutes = parseInt(dateString.slice(10, 12), 10);

        return new Date(year, month, day, hours, minutes);
    }

    console.error("Formato de data inválido:", dateString);
    return null; // Retorna null caso o formato seja inválido
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