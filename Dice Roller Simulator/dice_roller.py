import random
import time

def roll_die_simulation():
    # Simulate pressing Enter
    print("Press Enter to roll the die...")
    time.sleep(1)
    # Countdown animation
    for i in range(3, 0, -1):
        print(f"Rolling in {i}...", end='\r')
        time.sleep(1)
    print("Rolling now!   ")
    # Simulate die roll
    result = random.randint(1, 6)
    print(f"You rolled a {result}!")

roll_die_simulation()

