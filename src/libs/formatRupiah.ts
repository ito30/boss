const formatRupiah = (price: number | undefined) => {
  if (!price) {
    price = 0
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export default formatRupiah;
