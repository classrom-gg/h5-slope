// Stub - no ads, no tracking
function showNextAd() {
    console.log("ad skipped");
    adBreakDoneData();
}
function showReward() {
    console.log("reward skipped");
    gainReward();
}
function noRewardAdsAvailable() {
    myGameInstance.SendMessage('Canvas', 'NoRewardedAdsTryLater');
}
function cancelReward() {
    myGameInstance.SendMessage('Canvas', 'resumeGameRewarded');
    myGameInstance.SendMessage('Canvas', 'rewardAdsCanceled');
}
function gainReward() {
    myGameInstance.SendMessage('Canvas', 'resumeGameRewarded');
    myGameInstance.SendMessage('Canvas', 'rewardAdsCompleted');
}
function passBeforeAdData() {
    myGameInstance.SendMessage('Canvas', 'pauseGame');
}
function adBreakDoneData() {
    myGameInstance.SendMessage('Canvas', 'resumeGame');
}