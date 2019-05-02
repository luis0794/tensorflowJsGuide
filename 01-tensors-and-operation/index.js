const tf = require("@tensorflow/tfjs");

module.exports = {
    init(){

        //-------- Tensors --------//

        //-------- A tf.Tensor can be created from an array with the tf.tensor() method: --------//
        console.log(`------- Creating tensors -------`);

        // Create a rank-2 tensor (matrix) matrix tensor from a multidimensional array.
        const a = tf.tensor([[1,2], [3,4]]);
        console.log(`shape: ${ a.shape }`);
        a.print();

        // Or you can create a tensor from a flat array and specify a shape.
        const shape = [2, 2];
        const b = tf.tensor([1, 2, 3, 4], shape);
        console.log(`\nshape: ${ b.shape }`);
        b.print();

        //-------- Changing the shape of a Tensor --------//
        console.log(`\n------- Changing the shape of a Tensor -------`);

        const c = tf.tensor([[1, 2], [3, 4]], [2, 2], "int32");
        console.log(`\nshape: ${ c.shape }
                        dtype: ${ c.dtype }`);
        c.print();

        const d = tf.tensor([[1, 2], [3, 4]]);
        console.log(`\nshape: ${ d.shape }`);
        d.print();

        const e = d.reshape([4, 1]);
        console.log(`\nshape: ${ e.shape }`);
        e.print();

        //-------- Getting values from a Tensor --------//
        console.log(`\n------- Changing the shape of a Tensor -------`);

        const f = tf.tensor([[1, 2], [3, 4]]);
        // Returns the multi dimensional array of values.
        f.array().then(array => console.log(array));
        // Returns the flattened data that backs the tensor.
        f.data().then(data => console.log(data));

        // Synchronous versions
        console.log(`\nSynchronous versions`);
        // You should always prefer the asynchronous methods in production applications
        console.log(f.arraySync());
        console.log(f.dataSync());

        //-------- Operations --------//
        console.log(`\n\n------- Operations -------`);

        console.log(`Example: computing x2 of all elements in a tf.Tensor:`);
        tf.tensor([1, 2, 3, 4])
            .square()
            .print();

        console.log(`Example: adding elements of two tf.Tensors element-wise:`);
        tf.tensor([1, 2, 3, 4])
            .add(tf.tensor([10, 20, 30, 40]))
            .print();

        console.log(`\n\n------- Memory -------
        \rTo destroy the memory of a tf.Tensor, you can use the dispose()method or tf.dispose():`);
        tf.tensor([[1, 2], [3, 4]]).dispose();

        console.log(`TensorFlow.js provides a tf.tidy() method which cleans up all tf.Tensors that are not returned by a 
        \rfunction after executing it, similar to the way local variables are cleaned up when a function is executed:`);
        tf.tidy(() => {
           return tf.tensor([[1, 2], [3, 4]]).square().log().neg();
        });

        console.log(`\nYou can also get the number of Tensors tracked by TensorFlow.js:`);
        console.log(tf.memory());

    }
};