//Init Robot
#define ENA 5 //Left Motor Speed
#define ENB 6 //Right Motor Speed
#define IN1 7 //Left Front Wheel
#define IN2 8 //Left Rear Wheel
#define IN3 9 //Right Rear Wheel
#define IN4 11 //Right Rear Wheel
#define LED 13 //LED Lights


unsigned char carSpeed = 200;
bool state = LOW;
char getstr;




//Movement Functionality
//Forward
void forward() { 
    digitalWrite(ENA,HIGH);
    digitalWrite(ENB,HIGH);
    digitalWrite(IN1,HIGH);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,HIGH);
    Serial.println("Forward");
    Serial.flush();
}

//Forward-Left
void forwardLeft() { 
    digitalWrite(ENA,HIGH);
    digitalWrite(ENB,LOW);
    digitalWrite(IN1,HIGH);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,LOW);
    Serial.println("Left Forward");
    Serial.flush();
}

//Forward-Right
void forwardRight() { 
    digitalWrite(ENA,LOW);
    digitalWrite(ENB,HIGH);
    digitalWrite(IN1,LOW);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,HIGH);
    Serial.println("Right Forward");
    Serial.flush();
}


//Reverse
void reverse() {
    digitalWrite(ENA,HIGH);
    digitalWrite(ENB,HIGH);
    digitalWrite(IN1,LOW);
    digitalWrite(IN2,HIGH);
    digitalWrite(IN3,HIGH);
    digitalWrite(IN4,LOW);
    Serial.println("Back");
    Serial.flush();
}

void reverseLeft() {
    digitalWrite(ENA,HIGH);
    digitalWrite(ENB,LOW);
    digitalWrite(IN1,LOW);
    digitalWrite(IN2,HIGH);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,LOW);
    Serial.println("Left Back");
    Serial.flush();
}

void reverseRight() {
    digitalWrite(ENA,LOW);
    digitalWrite(ENB,HIGH);
    digitalWrite(IN1,LOW);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,HIGH);
    digitalWrite(IN4,LOW);
    Serial.println("Right Back");
    Serial.flush();
}


//Left
void left() {
    analogWrite(ENA,carSpeed);
    analogWrite(ENB,carSpeed);
    digitalWrite(IN1,LOW);
    digitalWrite(IN2,HIGH);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,HIGH); 
    Serial.println("Left");
    Serial.flush();
}


//Right
void right() {
    analogWrite(ENA,carSpeed);
    analogWrite(ENB,carSpeed);
    digitalWrite(IN1,HIGH);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,HIGH);
    digitalWrite(IN4,LOW);
    Serial.println("Right");
    Serial.flush();
}


//Brake
void stop() {
    digitalWrite(ENA,LOW);
    digitalWrite(ENB,LOW);
    Serial.println("Stop!");
    Serial.flush();
}


//Toggle Light
void lightToggle() {
    state = !state;
    digitalWrite(LED, state);
    Serial.println("Light");
    Serial.flush();
}




//Init Serial Connection
void setup() {
    Serial.begin(9600);
    pinMode(LED, OUTPUT);
    pinMode(IN1,OUTPUT);
    pinMode(IN2,OUTPUT);
    pinMode(IN3,OUTPUT);
    pinMode(IN4,OUTPUT);
    pinMode(ENA,OUTPUT);
    pinMode(ENB,OUTPUT);
    stop();
}

//Robot Controls
void loop() {
    getstr = Serial.read();
    Serial.println(getstr);
    digitalWrite(getstr, state);
    switch(getstr) {
        case 'w': forward(); break;
        case 's': reverse();   break;
        case 'a': left(); break;
        case 'd': right(); break;
        case 'k': stop(); break;
        case 'l': lightToggle(); break;
        default: break;
    }
    delay(100);
}

