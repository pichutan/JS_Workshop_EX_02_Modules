export const sortingAlgorithmData = [
  {
      title: "Bubble Sort",
      description: "A simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order",
      time_complexity: "O(n^2)",
      space_complexity: "O(1)",
      type: "bubble_sort"
  },
  {
      title: "Selection Sort",
      description: "This algorithm divides the list into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and moves it to the end of the sorted region.",
      time_complexity: "O(n^2)",
      space_complexity: "O(1)",
      type: "selection_sort"
  },
  {
      title: "Insertion Sort",
      description: "This algorithm builds the sorted array one item at a time. It takes each element from the unsorted region and inserts it into the correct position in the sorted region.",
      time_complexity: "O(n2)",
      space_complexity: "O(1)",
      type: "insertion_sort"
  },
  {
      title: "Merge Sort",
      description: "A divide-and-conquer algorithm that splits the list into two halves, recursively sorts each half, and then merges the sorted halves back together.",
      time_complexity: "O(nlogn)",
      space_complexity: "O(n)",
      type: "merge_sort"
  },
  {
      title: "Quick Sort",
      description: "Another divide-and-conquer algorithm that selects a 'pivot' element and partitions the array into elements less than the pivot and elements greater than the pivot, then recursively sorts the partitions.",
      time_complexity: "O(nlogn)",
      space_complexity: "O(logn)",
      type: "quick_sort"
  },
  {
      title: "Heap Sort",
      description: "This algorithm converts the list into a binary heap structure and repeatedly extracts the maximum element from the heap, rebuilding the heap each time.",
      time_complexity: "O(nlogn)",
      space_complexity: "O(1)",
      type: "heap_sort"
  }
]