export function isGameFinish(player_one_hp: number, player_two_hp: number) {
    if(player_one_hp==0 && player_two_hp==0 ){
        throw new Error("Both players can't have hp = 0 together")
    }
    if(player_one_hp<0 || player_two_hp<0){
        throw new Error("Hp cannot be less than zero")
    }
    if(player_one_hp==0 && player_two_hp>0){
        return {message:'Player Two Win',GameFinish:true}
    }
    if(player_two_hp==0  && player_one_hp>0 ){
        return {message:'Player One Win',GameFinish:true}
    }
    return {message:'Game is still playing',GameFinish:false}
}
