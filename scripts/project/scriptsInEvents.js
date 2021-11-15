let ShowPopup = false;

const onPopupBtnClick = () => {
    ShowPopup = !ShowPopup;
    popupDiv(ShowPopup);
};

function popupDiv(isShow) {
    if (isShow) {
        const popup = document.createElement("div");
        const popupInner = document.createElement("div");
        const closeBtn = document.createElement("button");
        const adsIns = document.createElement("ins");

        popup.classList.add("popup");
        popupInner.classList.add("popup-inner");
        adsIns.classList.add("adsbygoogle");

        closeBtn.innerText = "X"
		
		popup.style.position = "fixed";
		popup.style.width = "100%";
		popup.style.height = "100%";
		popup.style.backgroundColor = "rgba(0,0,0,0.5)";
		popup.style.top = "0";
		popup.style.left = "0";
		popup.style.right = "0";
		popup.style.bottom = "0";
		popup.style.margin = "auto";
		
		const popupInnerBorder = "4%";
		popupInner.style.position = "absolute";
		popupInner.style.left = "50%";
        popupInner.style.transform = "translate(-50%, 0%)";
		popupInner.style.top = popupInnerBorder;
		popupInner.style.margin = "auto";
		popupInner.style.background = "rgba(0,0,0,0)";
		
		closeBtn.style.position = 'block';
        closeBtn.style.fontSize = "1rem";
        closeBtn.style.background = 'rgba(0,0,0,0)';
        closeBtn.style.border = "none";
        closeBtn.style.color = 'white';

        adsIns.style.display = "block";
        adsIns.style.justifyContent = "center";
        adsIns.style.alignItems = "center";
        adsIns.style.width = "300px";
        adsIns.style.height = "550px"

        const client = document.createAttribute("data-ad-client");
        const slot = document.createAttribute("data-ad-slot");

        client.value = "ca-pub-3646750237820161";
        slot.value = "2904379914";

        adsIns.setAttributeNode(client);
        adsIns.setAttributeNode(slot);

        popup.appendChild(popupInner);
        popupInner.appendChild(closeBtn);
        popupInner.appendChild(adsIns);

        closeBtn.addEventListener("click", onPopupBtnClick);
		
		const adsByGoogle = document.querySelector(".adsbygoogle");
        if(adsByGoogle) {
            popupInner.style.maxWidth = adsByGoogle.style.width;
        }

        document.body.appendChild(popup);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } else {
        document.body.removeChild(document.querySelector(".popup"));
    }
    
}


const scriptsInEvents = {

		async Gamesheet_Event196_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event197_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event198_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event199_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event200_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event201_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event202_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event203_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event204_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event205_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event206_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event207_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event208_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event209_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event210_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event211_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event212_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event213_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event214_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		},

		async Gamesheet_Event215_Act1(runtime, localVars)
		{
			onPopupBtnClick();
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

