import React, { useState } from 'react';
import { Upload, ChevronDown, CheckCircle } from 'lucide-react';
import App from '../App';

const JualBarang = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        condition: 'Bekas - Seperti Baru',
        category: 'Keyboard',
        location: '',
        contactInfo: ''
    });

    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const conditions = [
        'Bekas - Seperti Baru',
        'Bekas - Sangat Bagus',
        'Bekas - Bagus',
        'Bekas - Layak Pakai'
    ];

    const categories = [
        'Keyboard',
        'Mouse',
        'Headset',
        'Monitor',
        'Controller',
        'Konsol',
        'Komponen PC',
        'Aksesoris',
        'Lainnya'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setImages([...images, ...filesArray]);

            const previewsArray = filesArray.map(file => URL.createObjectURL(file));
            setPreviewImages([...previewImages, ...previewsArray]);
        }
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);

        const newPreviews = [...previewImages];
        URL.revokeObjectURL(newPreviews[index]);
        newPreviews.splice(index, 1);
        setPreviewImages(newPreviews);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after 2 seconds
            setTimeout(() => {
                setFormData({
                    title: '',
                    description: '',
                    price: '',
                    condition: 'Bekas - Seperti Baru',
                    category: 'Keyboard',
                    location: '',
                    contactInfo: ''
                });
                setImages([]);
                setPreviewImages([]);
                setIsSuccess(false);
            }, 2000);
        }, 1500);
    };

    return (
        <App className="min-h-screen bg-zinc-900 text-gray-300">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
                        <h2 className="text-xl font-semibold text-white mb-6">Jual Peralatan Gaming Bekas Anda</h2>

                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <CheckCircle size={64} className="text-emerald-500 mb-4" />
                                <h3 className="text-lg font-medium text-white">Berhasil Mengunggah Barang!</h3>
                                <p className="text-gray-400 mt-2">Peralatan gaming Anda telah terdaftar di Jual Barang.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Judul */}
                                <div className="mb-6">
                                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                                        Judul*
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="contoh: Mouse Gaming Razer DeathAdder Elite"
                                        required
                                    />
                                </div>

                                {/* Unggah Gambar */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">
                                        Gambar* (maksimal 5)
                                    </label>

                                    {previewImages.length < 5 && (
                                        <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 mb-4 text-center">
                                            <input
                                                type="file"
                                                id="images"
                                                accept="image/*"
                                                multiple
                                                onChange={handleImageChange}
                                                className="hidden"
                                                disabled={previewImages.length >= 5}
                                            />
                                            <label htmlFor="images" className="cursor-pointer flex flex-col items-center">
                                                <Upload size={32} className="text-emerald-500 mb-2" />
                                                <span className="text-white font-medium">Unggah Foto</span>
                                                <span className="text-gray-400 text-sm mt-1">Klik untuk memilih atau seret gambar ke sini</span>
                                            </label>
                                        </div>
                                    )}

                                    {previewImages.length > 0 && (
                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-4">
                                            {previewImages.map((preview, index) => (
                                                <div key={index} className="relative group">
                                                    <img
                                                        src={preview}
                                                        alt={`Preview ${index + 1}`}
                                                        className="h-24 w-full object-cover rounded-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute top-2 right-2 bg-zinc-900 bg-opacity-70 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Harga dan Kondisi */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium mb-2">
                                            Harga* (dalam Rupiah)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-2">Rp</span>
                                            <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                placeholder="450000"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="condition" className="block text-sm font-medium mb-2">
                                            Kondisi*
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="condition"
                                                name="condition"
                                                value={formData.condition}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                                                required
                                            >
                                                {conditions.map((condition) => (
                                                    <option key={condition} value={condition}>{condition}</option>
                                                ))}
                                            </select>
                                            <ChevronDown size={16} className="absolute right-4 top-3 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Kategori */}
                                <div className="mb-6">
                                    <label htmlFor="category" className="block text-sm font-medium mb-2">
                                        Kategori*
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                                            required
                                        >
                                            {categories.map((category) => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-3 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Deskripsi */}
                                <div className="mb-6">
                                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                                        Deskripsi*
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Jelaskan barang Anda, termasuk detail kondisi, usia, alasan menjual, dll."
                                        required
                                    ></textarea>
                                    <p className="text-gray-400 text-xs mt-2">
                                        Berikan detail dan jelaskan kondisi peralatan gaming Anda dengan jujur.
                                    </p>
                                </div>

                                {/* Lokasi */}
                                <div className="mb-6">
                                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                                        Lokasi*
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="contoh: Jakarta, Indonesia"
                                        required
                                    />
                                </div>

                                {/* Informasi Kontak */}
                                <div className="mb-8">
                                    <label htmlFor="contactInfo" className="block text-sm font-medium mb-2">
                                        Informasi Kontak*
                                    </label>
                                    <input
                                        type="text"
                                        id="contactInfo"
                                        name="contactInfo"
                                        value={formData.contactInfo}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="contoh: WhatsApp: +62 812 3456 7890"
                                        required
                                    />
                                    <p className="text-gray-400 text-xs mt-2">
                                        Informasi ini akan terlihat oleh calon pembeli.
                                    </p>
                                </div>

                                {/* Tombol Submit */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || images.length === 0}
                                        className={`px-6 py-3 rounded-md text-white font-medium ${isSubmitting || images.length === 0
                                            ? 'bg-zinc-600 cursor-not-allowed'
                                            : 'bg-emerald-600 hover:bg-emerald-500'
                                            } transition-colors`}
                                    >
                                        {isSubmitting ? 'Mengirim...' : 'Jual Peralatan Gaming Saya'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </App>
    );
};

export default JualBarang;