
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	//recebe mensagem fillButtons
	if (request.action === "fillButtons") {

		//xPath do elemento que envelopa os cards
		let parent = getElementByXpath(
			'//*[@id="content"]/div/div[1]/div/div[5]/div[2]/div[2]/div[4]/div[1]'
		);
	
		for (let i = 0; i < parent.childElementCount; i++) {
			//xPath dentro do card
			const element = getElementByXpath(
				`//*[@id="content"]/div/div[1]/div/div[5]/div[2]/div[2]/div[4]/div[1]/div[${
					i + 1
				}]/div`
			);
	
			// Check if the element has already been filled
			if (!element.classList.contains('filled')) {
				console.log(element);
	
				var mineraRoiButton = document.createElement("a");
				var mineraRoiText = document.createElement("button");
				mineraRoiText.appendChild(
					document.createTextNode("+ Adicionar ao MineraRoi")
				);
	
				mineraRoiText.style.backgroundColor = "#2980b9";
				mineraRoiText.style.borderRadius = "8px";
				mineraRoiText.style.border = "none";
				mineraRoiText.style.color = "white";
				mineraRoiText.style.display = "inline-block";
				mineraRoiText.style.fontSize = "16px";
				mineraRoiText.style.fontWeight = "bold";
				mineraRoiText.style.lineHeight = "24px";
				mineraRoiText.style.width = "calc(100% - 32px)";
				mineraRoiText.style.padding = "8px 0";
				mineraRoiButton.style.padding = "0 16px";
	
				mineraRoiButton.appendChild(mineraRoiText);
				mineraRoiButton.href = "https://mineraroi.com/";
	
				// Add a class to mark the element as filled
				element.classList.add('filled');
	
				element.insertBefore(mineraRoiButton, element.childNodes[2]);
			}
		}
	}
    
});
