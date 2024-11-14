const symbols = ['Zayed'];
const background = document.querySelector('.background');

function createSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('symbol');
    symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = Math.random() * 100 + 'vw';
    symbol.style.top = Math.random() * 100 + 'vh';
    symbol.style.fontSize = Math.random() * 24 + 12 + 'px';
    symbol.style.animationDuration = Math.random() * 10 + 5 + 's';
    background.appendChild(symbol);

    setTimeout(() => {
        symbol.remove();
    }, 15000);
}

setInterval(createSymbol, 500);


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // هنا يمكنك إضافة الكود الخاص بوظيفة البحث
        }
    });

    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});

function showInfo(member) {
    const info = {
        ZAIDxQa: {
            name: 'ZAIDxQa',
            description: 'Description about ZAIDxQa...',
            
        },
        Ahmad_312: {
            name: 'Ahmad_312',
            description: 'Description about Ahmad_312...',
            
        },
        rdcu: {
            name: 'rdcu',
            description: 'Description about rdcu...',
            
        },
        ZCybSec: {
            name: 'ZCybSec',
            description: 'I am Zaid, a student at the University of Philadelphia, majoring in Cybersecurity. I enjoy participating in Capture The Flag (CTF) challenges and problem-solving',
        }
    };

    const memberInfo = info[member];
    document.getElementById('member-name').innerText = memberInfo.name;
    document.getElementById('member-description').innerText = memberInfo.description;
    document.getElementById('member-link').href = memberInfo.link;
    document.getElementById('member-info').style.display = 'block';
}


