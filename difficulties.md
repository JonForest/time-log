# Things that caught me out
* Your own typescript files can only live in the `utils` folder
* When passing a function into a child component, use the `{{action}}` helper, otherwise it will operate as a static
function without the context of `this` as the owning/parent Component
(https://github.com/glimmerjs/glimmer.js/blob/master/packages/@glimmer/application/src/helpers/action.ts#L5-L26 the `action` helper is calling the function with the correct context (first argument of `apply`))
* Can't update a tracked property in `didInsertElement` = https://github.com/glimmerjs/glimmer-component/issues/48
  So now wondering how I get my initial data loaded into the app
* Adding npm modules
* Non-obvious where helpers live.  `ember g glimmer-helper helper-name` - could do with documenting
* @tracked doesn't seem to pick up changes to objects (such array.push(item)) - needed to create a new
  reference
  
  Next:
  - Work out  how to get the startDate showing in the element