{
  "chaturbateHttpEvent": [{
    "fetch": {
      "title": "chaturbate main events",
      "url": "http://localhost:8888/events",
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": "bodyAsJSON"
    },
    "cancel": 15000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }],
  "stripchatHttpEvent": [{
    "fetch": {
      "title": "stripchat main events",
      "url": "http://localhost:8888/events",
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": "bodyAsJSON"
    },
    "cancel": 15000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }],
  "bongacamsHttpEvent": [{
    "fetch": {
      "title": "bongacams main events",
      "url": "http://localhost:8888/events",
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": "bodyAsJSON"
    },
    "cancel": 15000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }]
}
