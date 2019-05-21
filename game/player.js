class Player {
    increment = 15;
    radius = 10;
    diameter = this.radius * 2;
    ax = this.radius;
    ay = this.radius;
    canvasHeight;
    canvasWidth;

    isInitialCall = true;
    // Initial velocities
    vx = 0;
    vy = 5;
    gravity = 1;

    constructor(context, canvasWidth, canvasHeight) {
        this.context = context;
        this.draw();
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    draw() {

        this.context.beginPath();
        this.context.arc(this.ax, this.ay, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = "#FF0000";
        this.context.fill();
        this.context.closePath();
        
        if(this.isInitialCall) {
            this.isInitialCall = false;
            return;
        }
        
        this.ax += this.vx;
        this.ay += this.vy;
        this.vy += this.gravity;



    }

    clear() {
        this.context.clearRect(this.ax - this.radius, this.ay - this.radius, this.diameter, this.diameter);
    }

    moveRight() {
        if(this.ax + (this.radius + this.increment) >= this.canvasWidth) {
            return;
        }
        this.clear();
        this.ax+=this.increment;
        this.draw();
    }

    moveDown() {
        if(this.ay + this.increment >= this.canvasHeight) {
            return;
        }
        this.clear();
        this.ay+=this.increment;
        this.draw();
    }
    
    moveUp() {
        if(this.ay === 0) {
            return;
        }
        this.clear();
        this.ay-=this.increment;
        this.draw();
    }

    moveLeft() {
        if(this.ax === 0) {
            return;
        }
        this.clear();
        this.ax-=this.increment;
        this.draw();
    }
}
