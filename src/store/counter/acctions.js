import getRanddoInt from "../../helpers/getRandomInt"

    // async incrementRandomInt( {commit} ) {
    export const incrementRandomInt = async ( context ) => {
        context.commit('setLoading', true)
        const randomInt = await getRanddoInt()

        context.commit('incrementBy', randomInt)
        context.commit('setLoading', false)
        
    }