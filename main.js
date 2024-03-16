document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const projectItems = document.querySelectorAll('.main-content .project-item');
    let currentCategory = 'all'; // 跟踪当前显示的分类

    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('href').replace('#', '');

            // 判断是否重新点击相同的分类
            if (currentCategory === category) {
                // 如果是，显示所有项目
                projectItems.forEach(item => {
                    item.style.display = 'block';
                });
                currentCategory = 'all'; // 重置当前分类
            } else {
                // 否则，仅显示该分类的项目
                projectItems.forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                currentCategory = category; // 更新当前分类
            }
        });
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const projectItems = document.querySelectorAll('.project-item');

//     projectItems.forEach(item => {
//         // 生成随机宽度和高度
//         const randomWidth = Math.floor(Math.random() * 3) + 1; // 生成1到3之间的随机数
//         const randomHeight = 150 + Math.floor(Math.random() * 3) * 50; // 生成150到300之间的随机高度

//         // 根据生成的随机数设置项目的宽度和高度
//         item.style.flex = `0 0 calc(${randomWidth * 33.333}% - 16px)`;
//         item.style.height = `${randomHeight}px`;
//     });
// });

// Initialize a flag to keep track of whether non-about blocks are hidden
let areNonAboutBlocksHidden = false;

function showOnlyAbout() {
  if (!areNonAboutBlocksHidden) {
    // Hide all blocks that are not 'about'
    document.querySelectorAll('.project-item').forEach(item => {
      if (!item.classList.contains('about')) {
        item.style.display = 'none';
      }
    });
    
    // Update the flag
    areNonAboutBlocksHidden = true;
  } else {
    // Show all blocks
    document.querySelectorAll('.project-item').forEach(item => {
      item.style.display = 'block';
    });

    // Update the flag
    areNonAboutBlocksHidden = false;
  }
}

// Add click event listener to each 'about' block
document.querySelectorAll('.about').forEach(item => {
  item.addEventListener('click', showOnlyAbout);
});




document.querySelectorAll('.project-item.cdp, .project-item.architecture').forEach(item => {
    item.addEventListener('click', function() {
      // Logic for expanding the project item
      this.classList.toggle('expanded'); // This toggles the expanded class on and off
      
      const detail = this.querySelector('.project-detail');
      if (this.classList.contains('expanded')) {
        detail.style.display = 'block'; // Shows the project detail
      } else {
        detail.style.display = 'none'; // Hides the project detail
      }
    });
  });


// document.querySelectorAll('.project-item.cdp, .project-item.architecture').forEach(item => {
//     item.addEventListener('click', function() {
//         // Toggles the expanded class on and off
//         this.classList.toggle('expanded');
//     });
// });