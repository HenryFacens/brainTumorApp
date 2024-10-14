import * as DocumentPicker from 'expo-document-picker';
import { Alert } from 'react-native';

export default async function pickDocuments() {
    try {
        let result = await DocumentPicker.getDocumentAsync({
            type: 'application/octet-stream',
            copyToCacheDirectory: true,
            multiple: true,
        });

        console.log(result); // Log para ver o resultado completo

        // Se não for cancelado e houver assets
        if (result.type !== 'cancel' && result.assets) {
            const selectedFiles = result.assets.map(file => ({
                uri: file.uri,
                name: file.name,
            }));
            console.log('Files:', selectedFiles); // Agora deverá mostrar o name e uri corretamente
            return selectedFiles;
        } else {
            Alert.alert('Erro', 'Nenhum arquivo foi selecionado');
        }
    } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Ocorreu um erro ao selecionar os arquivos.');
    }
}
