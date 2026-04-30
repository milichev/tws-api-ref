### Integrate IB API with PyGame for Periodic Updates

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Illustrates how to keep the IB API synchronized within a PyGame application's main loop. By periodically calling `ib.sleep`, the application can receive market data updates while simultaneously handling PyGame events.

```python
import ib_async as ibi
import pygame


def onTicker(ticker):
    screen.fill(bg_color)
    text = f'bid: {ticker.bid}   ask: {ticker.ask}'
    quote = font.render(text, True, fg_color)
    screen.blit(quote, (40, 40))
    pygame.display.flip()


pygame.init()
screen = pygame.display.set_mode((800, 600))
font = pygame.font.SysFont('arial', 48)
bg_color = (255, 255, 255)
fg_color = (0, 0, 0)

ib = ibi.IB()
ib.connect()
contract = ibi.Forex('EURUSD')
ticker = ib.reqMktData(contract)
ticker.updateEvent += onTicker

running = True
while running:
    # This updates IB-insync:
    ib.sleep(0.03)

    # This updates PyGame:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()
```
