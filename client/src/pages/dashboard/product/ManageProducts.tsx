import { productDto } from "@/dto/productDto";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";

import EditProductForm from "./EditProductForm";
import AddProductForm from "./AddProductForm";
// import ManageTable from "./CustomTable";
const ManageProducts = () => {
  const {
    data,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsQuery({});
  if (isProductsLoading) return <div>Loading...</div>;
  if (isProductsError) return <div>Error loading products</div>;
  const products: productDto[] = data?.data || [];
  console.log(data);

  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <p className="text-gray-500">Add, update or remove products</p>
      </div>
      <div className="flex justify-end items-center mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Product</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>
                Fill out the product details below.
              </DialogDescription>
            </DialogHeader>

            <AddProductForm
              onSubmit={(newProduct) => {
                console.log("Add product:", newProduct);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full p-4">
        <Table className="overflow-x-auto border p-3" align="center">
          <TableCaption>A list of products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Colors</TableHead>
              <TableHead className="text-right">Sizes</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">
                  <img
                    className="w-20"
                    src={product.images[0]}
                    alt=""
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description.slice(0, 20)}...</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>৳ {product.price.toLocaleString("en-BD")}</TableCell>
                <TableCell className="text-right">
                  {`[`}
                  {product.colors?.map((color, index) => {
                    return (
                      <span key={index}>
                        {color}
                        {index !== (product.colors ?? []).length - 1 && ", "}
                      </span>
                    );
                  })}
                  {`]`}
                </TableCell>
                <TableCell className="text-right">
                  {`[`}
                  {product.colors?.map((size, index) => {
                    return (
                      <span key={index}>
                        {size}
                        {index !== (product.colors ?? []).length - 1 && ", "}
                      </span>
                    );
                  })}
                  {`]`}
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>
                          Update your product details below.
                        </DialogDescription>
                      </DialogHeader>

                      <EditProductForm
                        product={product}
                        onSubmit={(updatedData) => {
                          console.log("Submit updated product:", updatedData);
                        }}
                      />
                    </DialogContent>
                  </Dialog>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ml-2 cursor-pointer">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProducts;
