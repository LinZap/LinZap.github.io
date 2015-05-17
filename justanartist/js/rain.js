MeteorRain = new function() {
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var cursor;
    var canvas;
    var context;
    var particles = [];
    var mouseX = 0;
    var mouseY = 0;
    var pnum = 200;
    this.init = function() {
        canvas = document.querySelector("canvas");
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        if (canvas && canvas.getContext) {
            context = canvas.getContext("2d");
            document.addEventListener("mousemove", documentMouseMoveHandler, false);
            window.addEventListener("resize", windowResizeHandler, false);
            createCursor();
            windowResizeHandler();
            setInterval(loop, 30);
        }
    };
    function createCursor(position) {
        var w = 300;
        var h = 300;
        if (!position) {
            var pos = {
                x: (SCREEN_WIDTH - w) * .5 + Math.random() * w,
                y: (SCREEN_HEIGHT - h) * .5 + Math.random() * h
            };
            var m = new Cursor();
            m.position.x = pos.x;
            m.position.y = pos.y;
            cursor = m;
            createParticles(m.position);
        } else {
            var m = new Cursor();
            m.position.x = position.x;
            m.position.y = position.y;
            createParticles(m.position);
        }
    }
    function createParticles(pos) {
        for (var i = 0; i < pnum; i++) {
            var p = new Particle();
            p.position.x = pos.x;
            p.position.y = pos.y;
            p.shift.x = pos.x;
            p.shift.y = pos.y;
            p.color = "rgba(70,70," + Math.floor(range(100, 150)) + "," + range(.2, .6) + ")";
            particles.push(p);
        }
    }
    function documentMouseMoveHandler(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    function windowResizeHandler() {
        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        canvas.style.position = "absolute";
        canvas.style.left = (window.innerWidth - SCREEN_WIDTH) * .5 + "px";
        canvas.style.top = (window.innerHeight - SCREEN_HEIGHT) * .5 + "px";
    }
    function loop() {
        context.fillStyle = "#eee";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var particle;
        var i, j, ilen, jlen;
        cursor.position.x += (mouseX - cursor.position.x) * .1;
        cursor.position.y += (mouseY - cursor.position.y) * .1;
        for (i = 0, ilen = particles.length; i < ilen; i++) {
            particle = particles[i];
            particle.angle += particle.speed;
            particle.shift.x += (cursor.position.x - particle.shift.x) * particle.speed;
            particle.shift.y += (cursor.position.y - particle.shift.y) * particle.speed;
            particle.position.x = particle.shift.x + Math.sin(i + particle.angle) * particle.orbit * particle.force;
            particle.position.y = particle.shift.y + Math.cos(i + particle.angle) * particle.orbit * particle.force;
            particle.orbit += (cursor.orbit - particle.orbit) * .01;
            context.beginPath();
            context.fillStyle = particle.color;
            context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
            context.fill();
        }
    }
}();

function distanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx ^ 2 + dy ^ 2);
}

function Particle() {
    this.size = range(3, 20);
    this.position = {
        x: 0,
        y: 0
    };
    this.shift = {
        x: 0,
        y: 0
    };
    this.angle = 0;
    this.speed = .01 + Math.random() * .06;
    this.force = -(Math.random() * 7);
    this.orbit = 1;
}

function Cursor() {
    this.orbit = 200;
    this.position = {
        x: 0,
        y: 0
    };
}

function range(min, max) {
    return Math.random() * (max - min) + min;
}

MeteorRain.init();

