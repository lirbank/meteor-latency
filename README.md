# Meteor Latency

### Installation
```sh
$ meteor add mikael:latency
```

### Usage
```javascript
Meteor.latency(amount);
```
The `amount` is an optional integer for how much latency to introduce. You should probably keep `amount` to 5 or lower.

### Example
```javascript

// BOTH SERVER AND CLIENT
Meteor.methods({
  myMethod: function () {

    // Add latency if we're on the server
    if (!this.isSimulation) {
      Meteor.latency(2);
    }
    return 'result';
  }
});

// CLIENT
Meteor.call('myMethod', function (error, result) {
  console.log(result);
});
```

### Background
Found myself writing a bogus loop quite a bit when checking latency
compensation on login forms, etc., for my Meteor projects. Inspired
by [@cmather](https://github.com/cmather)'s
[meteor-methods](https://github.com/EventedMind/meteor-methods) demo.
