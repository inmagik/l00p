# l00p
Getting useful loop information while looping.

This package has been created for help mapping items in, just say, React:

## Install
```
yarn add l00p
```

```
npm install --save l00p
```

## Usage

Without *l00p*:
```js
...
<div>
{some.stuff.collection.map((item, i) => {
    const first = i === 0
    const last = i === some.stuff.collection.length - 1
    return (
        <div className={first ? 'class' : 'anotherClass'}>
            {item.name}
        </div>
    )
})}
</div>
...
```
With *l00p*:
```js
import loop from 'l00p'
...
<div>
{loop(some.stuff.collection, (item, { first }) => (
    <div className={first ? 'class' : 'anotherClass'}>
        {item.name}
    </div>
))}
</div>
...
```

Here the complete list of values provided while looping:
- **index**: The current index.
- **first**: A boolean true when is ther fist element of collection.
- **last**: A boolean true when is ther last element of collection.
- **reverseIndex**: The index from the end (`collection.lentgth - index`).
- **even**: A boolean true when the index is even.
- **odd**: A boolean true when the index is odd.
