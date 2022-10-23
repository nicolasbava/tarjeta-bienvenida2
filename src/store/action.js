const updateWord = palabra => {

    console.log('PALABRA:', palabra)

    return {
        type: 'UPDATE_WORD',
        payload: palabra
    }
}

export default updateWord;