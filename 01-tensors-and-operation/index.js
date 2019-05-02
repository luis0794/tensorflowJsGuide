const tf = require("@tensorflow/tfjs");

module.exports = {
    init(){

        //-------- Tensors --------//

        //-------- A tf.Tensor can be created from an array with the tf.tensor() method: --------//
        console.log(`------- Creating tensors -------`)
        // Create a rank-2 tensor (matrix) matrix tensor from a multidimensional array.
        const a = tf.tensor([[1,2], [3,4]]);
        console.log(`shape: ${ a.shape }`);
        a.print();

        // Or you can create a tensor from a flat array and specify a shape.
        const shape = [2, 2];
        const b = tf.tensor([1, 2, 3, 4], shape);
        console.log(`\nshape: ${ b.shape }`);
        b.print();

        //-------- Changing the shape of a Tensor -------- //
        const c = tf.tensor([[1, 2], [3, 4]], [2, 2], "int32");
        console.log(`\nshape: ${ c.shape }`);
        console.log(`dtype: ${ c.dtype }`);
        c.print();

        console.log(`\n------- Changing the shape of a Tensor -------`)
        const d = tf.tensor([[1, 2], [3, 4]]);
        console.log(`\nshape: ${ d.shape }`);
        d.print();

        const e = d.reshape([4, 1]);
        console.log(`\nshape: ${ e.shape }`);
        e.print();
    }
}