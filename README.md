# Febble

Febble watch project for Facebook Hackathon

## Architecture / included devices

Display <--> Arduino <--> Bluetooth <--> Serialport <--> Node <--> Browser

## Events

Outlining how the service should handle events

#### Services side

- event comes in from service (facebook) - is this subscribe or push?
- written into DB, status set to new
- latest new event sent to watch, or wait 10sec between events
- wait for success callback, set to sent, return to top as new otherwise

#### Watch side

- event recieved on watch via bluetooth, calls back to serial port to confirm it is recieved
- arduino pushes event to display, listens for button push for 8 seconds
- if button push is registered, call back to serial port with response
- otherwise, remove event after 8-10 seconds, call back to serial port with noUserResponse


## Screens and functionality layout

1. Login screen
    # login with facebook
2. Dashboard screen
    # list of events
3. Device connect and settings screen
    # connect your febble watch
    # general settings
        - how long to display an event on the screen (initially until a button push is detected)
    # status of this connection
    # learn which buttons do what? (FAQ)
4. Connected service(s)
    # facebook
        # connect/disconnect service
        # toggle phone notification settings, which to show, etc
    # email
        ...
    # twitter
        ...

## Userful reference

Facebook auth permissions list: https://developers.facebook.com/docs/reference/login/