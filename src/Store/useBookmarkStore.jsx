import { create } from "zustand";

const useBookmarkStore = create((set) => ({
    bookmarks: [],

    addBookmark: (item) => set((state) => {
        const existingItem = state.bookmarks.find(b => b.id === item.id);
        if (existingItem) {
            return {
                bookmarks: state.bookmarks.map(b => 
                    b.id === item.id ? { ...b, count: b.count + 1 } : b
                )
            };
        } else {
            return {
                bookmarks: [...state.bookmarks, { ...item, count: 1 }]
            };
        }
    }),

    removeBookmark: (itemId) => set((state) => ({
        bookmarks: state.bookmarks.filter(item => item.id !== itemId)
    })),

    updateBookmarkPlus: (itemId) => set((state) => ({
        bookmarks: state.bookmarks.map(item => 
            item.id === itemId ? { ...item, count: item.count + 1 } : item
        )
    })),

    updateBookmarkMinus: (itemId) => set((state) => ({
        bookmarks: state.bookmarks.map(item => 
            item.id === itemId && item.count > 1 ? { ...item, count: item.count - 1 } : item
        )
    })),

    clearBookmark: () => set({
        bookmarks: []
    })
}));

export default useBookmarkStore;
