import { create } from "zustand";

const useBookmarkStore = create((set) => ({
    bookmarks: [],

    addBookmark: (item) => set((state) => ({
        bookmarks: [...state.bookmarks, item],
    })),

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
