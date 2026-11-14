document.getElementById('submitBtn').addEventListener('click', () => {
    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    if (password === formattedDate) {
        message.textContent = `TUGILGAN KUNINGIZ BILAN ${login.toUpperCase()}`;
        launchConfetti();
        const con = document.getElementById('con');
        con.style.animationName = 'nn';
        message.style.width = '100%'
        message.style.color = 'rgb(0, 82, 123)';
        message.style.position = 'absolute'
        message.style.top = '430px'
        message.style.font = '50px 1000'
        document.body.style.background = "url('bti.webp') no-repeat center center / cover";
    }

    else {
                const con = document.getElementById('con');

                con.style.display = 'none'

        message.textContent = `Afsus bugun tugilgan kuningiz emas ekan Lekin konglingiz o'ksimasin tugilgan kuningizda bu saytga kirsangiz tabrigimizni qabul qilasiz`
        message.style.color = 'red'
        message.style.textAlign = 'center'

    }






})


function launchConfetti() {
    const end = Date.now() + 25 * 1000;
    const colors = ["#3300ed", "#ffffff"];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });
        confetti({
  spread: 360,
  ticks: 200,
  gravity: 1,
  decay: .94,
  startVelocity: 30,
  particleCount: 5,
  scalar: 3,
  shapes: ["image"],
  shapeOptions: {
    image: [{
        src: "https://particles.js.org/images/fruits/apple.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/avocado.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/banana.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/berries.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/cherry.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/grapes.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/lemon.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/orange.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/peach.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/pear.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/pepper.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/plum.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/star.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/strawberry.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/watermelon.png",
        width: 32,
        height: 32
      },
      {
        src: "https://particles.js.org/images/fruits/watermelon_slice.png",
        width: 32,
        height: 32
      }
    ]
  }
});

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
    
}






















































































































































































































