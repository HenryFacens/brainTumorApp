import { Alert } from 'react-native';

export default async function uploadFiles(selectedFiles, setImageUri) {
    try {
        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('files', {
                uri: file.uri,
                name: file.name,
                type: 'application/octet-stream',
            });
        });
        console.log('Files:', formData);
        const response = await fetch('http://192.168.15.11:8080/blend-images', {
            method: 'POST',
            body: formData,
        });
        console.log(response);
        if (!response.ok) {
            console.log(response);
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'Erro ao processar a requisição');
        }

        const blob = await response.blob();

        // Converter o blob em URI para exibição
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUri(reader.result);  // Agora passamos o resultado para o componente pai
        };
        reader.readAsDataURL(blob);

    } catch (error) {
        Alert.alert('Erro', error.message || 'Erro ao enviar os arquivos.');
    }
}
